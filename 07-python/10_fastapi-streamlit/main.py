"""
FastAPI

- 파이썬으로 API서버를 만들 수 있게 해주는 웹 프레임워크
- 함수 하나에 URL경로를 연결하기만 하면 API 하나가 완성 
- 타입 힌트만 붙여도 자동을 값 검증 + API 문서 (Swagger UI) 까지 만들어줌
- uvicorn : FastAPI로 만든 앱을 실제로 실행시켜주는 서버 프로그램 

uv add fastapi uvicorn - 폴더 내 가상환경에 설치 
uvicorn main:app --reload - 서버 실행 (main.py가 있는 위치에서, 폴더 이동은 cd로 가능)
브라우저에서 https://127.0.0.1:8000 접속 가능
https://127.0.0.1:8000/docs 접속하면 Swagger UI라는 API 문서 확인 가능
"""

from fastapi import FastAPI
import pymysql

app = FastAPI()

def get_connection():
    return pymysql.connect(
        host="127.0.0.1", user="root", password="qwer1234", db="test_db", 
        cursorclass=pymysql.cursors.DictCursor)

@app.get("/")
def read_root():
    return {"message": "회원관리 API"}

"""
CRUD를 HTTP 메서드로 표현

- 09에서 mysql로 했던 걸 API에서는 http 메서드로 표현 
- GET: 조회(read): 데이터가져오기 
- POST : 생성
_ PUT : 수정
- DELETE : 삭제
- FastAPI에서는 @app.get(...), @app.post(...)처럼 데코레이터만 바꾸면 됨 
"""

@app.get("/members")
def read_member():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM member")
    rows = cur.fetchall()
    conn.close()
    return rows

"""
경로 파라미터 (path parameter)

- URL 경로 자체에 값을 넣어서 전달하는 방식
- 함수 파라미터 이름과 {} 안 이름을 똑같이 맞추면 FASTAPI가 값을 넣어줌 

"""
@app.get("/members/{member_id}")
def read_root(member_id: int):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM member WHERE id = %s", (member_id,))
    row = cur.fetchone()
    conn.close()
    return row
    


"""
요청 본문(request body)과 Pydantic 모델
- 회원 등록처럼 여러 값을 한 번에 보내야 할 땐, URL이 아니라 요청 본문(body)에 담아서 보냄
- POST/PUT 요청에서 사용

"""
from pydantic import BaseModel

class Member(BaseModel): 
    name: str
    address: str
    email: str
    phone_number: str
    job: str
    company: str


""" Create - 회원 등록 API
- POST 요청의 본문으로 Member 데이터가 오면 파라미터에 member:Member라고만 적어도 자동 검증
member.model_dump() : Pydantic 모델을 다시 딕셔너리로 변환 
 """

@app.post("/members")
def Create_member(member:Member):
    conn = get_connection()
    cur = conn.cursor
    cur.execute("""INSERT INTO member (name, address, email, phone_number, job, company) 
                VALUES(%s, %s, %s, %s, %s, %s)""", (member.name, member.address, member.email, member.phone_number, member.job, member.company))
    conn.commit()
    new_id = cur.lastrowid
    conn.close()
    return {"id": new_id, **member.model_dump()}


""" Update - 회원 수정 API / Delete - 회원 삭제 API

- 수정, 삭제 모두 "어떤 회원인지" 경로 파라미터 (member_id)를 받아야 함
- 수정은 Create처럼 본문(Member)도 함께 받고, 삭제는 경로 파라미터만 
 """
from fastapi import HTTPException


@app.put("/members")
def update_member(member:Member, member_id: int):
    conn = get_connection()
    cur = conn.cursor

    # 해당 id가 없다면 404에러 
    cur.execute("SELECT * FROM member WHERE id = %s", (member_id,))
    if cur.fetchone() is None: 
        conn.close()
        raise HTTPException(status_code=404, detail="Member not found")
    
    cur.execute("""UPDATE member SET name = %s, address = %s, email = %s, phone_number = %s, job = %s, company = %s,
                WHERE id = %s""", (member.name, member.address, member.email, member.phone_number, member.job, member.company))
    
    conn.commit()
    new_id = cur.lastrowid
    conn.close()
    return {"id": member_id, **member.model_dump()}

@app.delete("/members")
def delete_member(member_id:int):
    conn = get_connection()
    cur = conn.cursor

    # 해당 id가 없다면 404에러 
    cur.execute("SELECT * FROM member WHERE id = %s", (member_id,))
    if cur.fetchone() is None: 
        conn.close()
        raise HTTPException(status_code=404, detail="Member not found")
    
    cur.execute("""DELETE FROM member WHERE id = %s""", (member_id,))
    conn.commit()
    conn.close()
    return {"message": "삭제 완료"}

