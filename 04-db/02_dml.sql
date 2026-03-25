/*
DML
- 테이블에 저장된 데이터를 다루는 언어
- INSERT(추가), SELECT(조회), UPDATE(수정), DELETE(삭제)
*/

-- INSERT 테이블에 새로운 값을 추가
INSERT INTO users
VALUES(1, 'user01', 'email.com', 'asdf1234');

-- 에러의 이유 : 컬럼 수가 맞지 않음
INSERT INTO users
VALUES('user01', 'email.com', 'asdf1234');

-- 테이블명(컬럼명, 컬럼명, ...) 기재
INSERT INTO users(name, email, password)
VALUES('user02', 'email2.com', 'asdf4567');

-- 컬럼명 순서는 상관없음 (컬럼명 순서 = 값 순서는 동일해야)
INSERT INTO users(email, password, name)
VALUES('email6.com', '1234', 'user03');

-- 레시피 한개 추가
-- user_id : 1, name : 모히또
-- image : 모히또.jp, description : 상큼하고 청량한 쿠바식 칵테일

INSERT INTO recipes(user_id, name, image, description)
VALUES(1, '모히또', '모히또.jp', '상큼하고 청량한 쿠바식 칵테일');




-- SELECT 테이블에 저장된 데이터 조회

/*
SELECT 컬럼명, 컬럼명, ...
FROM 테이블명;
*/

-- * : 전체 컬럼명 조회
SELECT * FROM users; 

-- 필요한 컬럼명만 조회 
SELECT email, password
FROM users;

-- name이 'user01'인 사람들의 name, email 조회
SELECT name, email
FROM users
WHERE name = 'user01';

-- id가 1인 사람의 email, password 조회
SELECT name, email
FROM users
WHERE id = 1;

SELECT * FROM recipes WHERE name = '모히또';


-- UPDATE : 테이블에 저장된 데이터를 수정
/*
UPDATE 테이블명 
SET 컬럼명 = 변경값
WHERE 조건;
*/
-- USERS 테이블에서 id가 3인 사람의 password를 pass01로 수정

UPDATE users 
SET PASSWORD = 'pass01'
WHERE id = 3;

UPDATE recipes 
SET name = '네그로니',
description = '진의 드라이함, 스위트 베르무트' 
WHERE name = '모히또';

-- DELETE : 테이블에 저장된 데이터를 삭제
/*
DELETE FROM 테이블명 
WHERE 조건; 

조건을 걸지 않으면 데이터가 모두 날아감
*/

DELETE FROM recipes 
WHERE name = '네그로니';

-- users 테이블에 있는 데이터 전부 삭제
DELETE FROM users; -- 조건이 없으면 테이블에 있는 데이터 삭제
TRUNCATE TABLE users; -- 테이블 초기화 (FK가 걸려있을 시 삭제 X)