# python 기초

python이 변수선언 할때는 그냥 a = 1 하면 된다.  


문자열 인덱싱 하는 법 a = "asdfasdf" --> a[0]    

문자열 슬라이싱 a = "asdfasdf" --> a[:6] 0 ~ 5 / a[1:3] 1 ~ 2.  

문자열포매팅  
구버전 포매팅 print("{1}{2}".변수이름.변수이름2)  
현버전 포매팅 print(f"{변수이름}{변수이름2 }")  
  
문자열 삽입(join) join a = "," --> a.join('abcde') --> a,b,c,d,e    

문자열 자르기(split) split a.split(",") --> abcde    

문자열 위치(find) address = "asdf" address.find('a') --> 0    

문자열 더하기 --> print("chan" + str(2)) --> chan2    
  
문자열 곱하기 --> print("chan" * 3) --> chanchanchan    

자료형 - list --> 리스트명 = []  
list에는 여러가지 함수가 있는데 나중에 자세히 설명하겠다.  

python의 기초적인 사용자 값 입력받기  
m = int(input("계산할 숫자를 넣으세요"))    
m , n = map(int,input("계산할 숫자를 넣으세요").split(','))    

python 출력에서 , 의 역할
a,b = a + " " + b
  
#tips for python

멀티 문자열과 멀티 주석 분별하는 법  
멀티 문자열은 변수에 넣어야 멀티 문자열이라고 인식됨  
멀티 주석은 그냥 ''' 하면 된다.    

row 문자열 --> 문자열 앞에 r붙이면 안에 어떤 특수 기호를 써도 그냥 문자열로 인식된다.  

# 제어문 in python

## if문

if문은 그대로 if로 작성한다.     
else if문은 elif로 작성한다.    
else문은 else문으로 작성한다.  

형식    
if 조건문:  
    문장1  
    문장2  
elif 조건문2:  
    문장1  
    문장2   
else:   
    문장1  
    문장2  

## 삼항연산자
a if test else b
참일때 결과값 if 조건문 else 거짓일 때 결과값
a * b if a > b else b - a

## for
for i in [a,b,c]:
    print(i); # a , b , c 가  순서대로 출력이 된다.

도는 횟수를 지정해주고 싶으면, 이렇게 해주면 된다.
sum += i
for i in range(1,11):
    sum += i 
print(sum)

range는 step도 지정할 수 있다.
for i in range(1,10,2) --> 1부터 10까지 2씩 더하면서 진행함
for i in range(10,1,-1) --> 10부터 1까지 1씩 빼면서 진행함

# list 내포

data2 =   
data2 = [n*2 for n in range(10)]  --> range의 값들을 모두 2 곱해서 data2에 list로 넣음  
result = [n*3 / for n in / a if n%2 ==0] # 원래 shift는 없습니다.    

# 집합내포

a = {i for i in 'apple'}  
b = {i for i in 'pineapple' if i not in 'api'}  

# 함수
python은 함수를 만들 때, def라는 것을 사용한다.  
return을 할 때, 여러개를 반환할 때가 있는데, 그러면 집합의 형태로 반환된다 --> ()  

# *args / **kwargs
함수의 매개변수가 몇개가 들어올 지 모르는 경우에는 위의 두개 중 하나를 사용한다  
*args는 리스트로 매개변수가 들어오고 **kwargs는 dictionary로 들어온다.  
  
#타입 힌팅

def sum_mul(word : str, num :int) -> int:
    # -> :int는  반환값이 int라는것을 의미한다. 매개변수 안에 str과 int는 매개변수가 str과 int로 들어가야   한다는 것을 의미한다.  
    return len(word) * num  
print(sum_mul("asd",4))  


# 함수 예시  
factorial을 돌리는 재귀함수 이다.  
def factorial(number:int):  
    if(number == 1):  
        return 1  
    else:  
        return factorial(number-1) * number   

number = int(input())  
print(factorial(number))  

# dictionary 가지고 놀기  

dictionary의 key값은 DB의 기본키와 같다. 절대로 중복되어서는 안된다.

books = {'394039':{'title':'파이썬 코딩의 기술','year':2016,'author':'브랫 슬라킨','price':21600},  
        '230999':{'title':'골빈해커의 3분 딥러닝','year':2017,'author':'김진중','price':19800},  
        '220333':{'title':'c언어 트레이닝','year':2017,'author':'아서 줄라이니','price':16200},  
        '551139':{'title':'웹 해킹 입문','year':2016,'author':'이상환','price':20500}}  

for book in books:  
    if books[book]['price'] > 20000:   
        print(f"{book} {books[book]['title']} {books[book]['price']}")  

for문으로 books를 돌릴경우, key값만 가지고 오는 것을 확인시켜주는 좋은 예시이다.  

books[book]['price'] == books.get(book).get('price')  


# 람다(lanbda)  
 
js의 화살표 함수 같은 느낌(=>)    
def 이름 없음(x):  
    if x > 0:  
        return x  
        이 코드를  
lambda x  : x>0 으로 바꾸는 것이다.

filter는 첫번째 매개변수로 def를 받고 두번째로는 배열을 받는데,  
def에 넣었을 때 참인 것만 반환한다.  

list = list(filter(lambda x : x>0 ,range(-10,11))   
--> 1,2,3,4,5,6,7,8,9,10  

3의 배수를 출력하는 lambda 활용 
list = list(filter(lambda x : x % 3 == 0 , range(1,21)))  
print(list)

## 복습용 좋은 예제
    number = int(input())  
list = input().split(" ")  

if len(list) < number:  
    print("wrong")  
for i in range(len(list) - number + 1):  
    toprint = list[i:i+number]  
    print(' '.join(toprint))  
