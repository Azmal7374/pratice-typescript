{
  //

  const addCourseToStudent = <T extends {id: number, name: string, email: string}>(student: T) => {
    const course = "Next Level Web Developemnt";
    return {
      ...student,
      course,
    };
  };

  const student3 = addCourseToStudent({
    id:333,
    name: "Student2",
    email: "student@student.com",
    emni: 'emni'
  })

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 123,
    name: "Mr.X",
    email: "x@gamil.com",
    devType: "next level web developer",
  });

  const student2 = addCourseToStudent({
    id:233,
    name: "Mr.Y",
    email: "y@gamil.com",
    hasWatch: "Apple Watch",
  });

  //
}
