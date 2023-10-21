recovery_students = []
with open("file.txt") as grades_file:
    for line in grades_file:
        student_grade = line.split(" ")
        if int(student_grade[1]) < 6:
            recovery_students.append(student_grade[0] + "\n")

with open("recuStudents.txt", mode="w") as recu_students_file:
    recu_students_file.writelines(recovery_students)
