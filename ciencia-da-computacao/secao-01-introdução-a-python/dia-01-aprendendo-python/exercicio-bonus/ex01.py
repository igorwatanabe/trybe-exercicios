numbers_list = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]


def minimum(numbers):
    smaller = numbers[0]
    for number in numbers:
        if number < smaller:
            smaller = number
    return smaller


# def minimum(numbers):
#    return min(numbers)

# # ou mesmo
# minimum = min

print(minimum(numbers_list))
