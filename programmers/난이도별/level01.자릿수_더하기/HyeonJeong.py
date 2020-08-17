#방법1
'''
def solution(n):
    answer = 0
    for i in range(1, 10):
        answer += n % 10
        n = n // 10
    return answer
'''
#방법2(한줄)
def solution(n):
    return sum(int(i) for i in str(n))

print(
    solution(123) == 6,
    solution(987) == 24
    )
