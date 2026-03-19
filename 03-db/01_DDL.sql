/*

- 데이터(data) : 화면에 보이거나, 사용자가 입력하거나, 저장해야 하는 정보들
- 데이터베이스(database) : 데이터를 저장하고 필요할 때 꺼내 쓰는 공간
- DBMS : 데이터베이스 관리 프로그램
- RDBMS : 관계형 데이터베이스 관리 시스템 
ex ) MySQL, Oracle
- SQL : 관계형 데이트베이스에서 데이터를 조회하거나 조작하기 위한 표준 언어
(관계형 DB가 아닐 시 SQL을 사용하지 못함)

- SQL 종류
	DDL : 데이터 정의어
    - DB의 구조를 정의하거나 변경, 삭제하기 위한 언어 
    - CREATE : 생성 / ALTER : 수정 / DROP : 삭제

	DML : 데이터 조작어
    - 데이터를 조작하기 위한 언어
    - SELECT : 조회 / INSERT : 추가 / UPDATE : 수정 / DELETE : 삭제 -> CRUD
    
    DCL : 데이터 제어어
	- DB의 보안, 권한 관리, 무결성 제어를 위한 언어
    - GRANT : 권한 부여 / REVOKE : 권한 회수
    
    TCL : 트랜젝션 제어어
    - 트랜젝션 처리 및 제어를 위한 언어
    - COMMIT : 실행 / ROLLBACK : 취소 / SAVEPOINT : 임시저장


DDL (Data Definition Languege) : 데이터 정의어
- 실제 데이터 값이 아닌 구조 자체를 정의하는 언어
- 객체를 만들고(CREATE), 변경하고(ALTER), 삭제(DROP)하는 언어

MySQL에서 객체 :  스키마(Schema), 테이블(Table), 뷰(View), 인덱스(Index), 프로시저(Procedure), 트리거(Trigger), 함수(Function)

*/

/*여기서부터 데이터베이스(스키마)를 생성할게! 라는 뜻

스키마: 테이블들을 담는 큰 공간
프로젝트 단위로 하나의 스키마를 만들어 사용*/

CREATE DATABASE sample; -- MySQL에서는 DATABASE = SCHEMA 
CREATE SCHEMA cocktail;

/*
엔티티(Entity) : 같은 성격을 가진 데이터를 묶어놓는 큰 주제
CREATE TABLE 테이블명 (
칼럼형 자료형(크기),
칼럼형 자료형(크기)
);
*/

-- 테이블 :  같은 성격의 데이터를 묶어두는 곳
-- 칼럼 : 테이블 안에서 각 정보의 종류를 구분하는 칸
-- 레코드 : 

CREATE TABLE reciepes(
name VARCHAR(50), image VARCHAR(200), descrpition TEXT
);

CREATE TABLE users(
    id VARCHAR(50),
email VARCHAR(200),
password VARCHAR(200),
name VARCHAR(200)
gender CHAR(1),
nickname VARCHAR(100),
phone VARCHAR(20),
birth DATE
);


