$(function () {
    var user = new User("Just", "Bob", "20/04/1990", "Cannabis Cultivation", 4.20);

    var courses = [
        new Course("Introduction to Cannabis Cultivation", 1, 82),
        new Course("From seed to bud I", 2, 85),
        new Course("Plant biology", 3, 65),
        new Course("The perfect high", 4, 99)
    ];

    init();

    $("#profile-button").click(function () {
        // Make the courses container/button unactive
        $("#courses-container").removeClass("active");
        $("#courses-button").removeClass("active");
        // Make the profile container/button active
        $("#profile-container").addClass("active");
        $("#profile-button").addClass("active");
    });

    $("#courses-button").click(function () {
        // Make the profile container/button unactive
        $("#profile-container").removeClass("active");
        $("#profile-button").removeClass("active");
        // Make the courses container/button active
        $("#courses-container").addClass("active");
        $("#courses-button").addClass("active");
    });

    $("#add-course-button").click(function () {
        //shows or hides the course adding form
        if ($("#add-course").css("display") == "none")
            $("#add-course").css("display", "inline");
        else
            $("#add-course").css("display", "none");
    });

    $("#save-course").click(function () {
        addCourse(new Course($("#title").val(),$("#semester").val(),$("#grade").val()));
        updateGPA(user,courses);
        $(".input").val('');
        $("#add-course").css("display", "none");
    });


    function init() {

        $(".info #name").text(user.firstname + " " + user.lastname);
        $(".info #birthdate").text(user.birthdate);
        $(".info #faculty").text(user.faculty);

        $("#gpa strong").text(user.gpa);

        for (let i = 0; i < courses.length; i++) {
            let tr = $("<tr></tr>");
            let id = $("<td></td>").text(i + 1);
            let title = $("<td></td>").text(courses[i].title);
            let semester = $("<td></td>").text(courses[i].semester);
            let grade = $("<td></td>").text(courses[i].grade);

            tr.append(id);
            tr.append(title);
            tr.append(semester);
            tr.append(grade);

            $("#courses tbody").append(tr);
        }

    }

    function addCourse(course) {
        courses.push(course)
        let tr = $("<tr></tr>");
        let id = $("<td></td>").text(courses.length);
        let title = $("<td></td>").text(course.title);
        let semester = $("<td></td>").text(course.semester);
        let grade = $("<td></td>").text(course.grade);
        tr.append(id);
        tr.append(title);
        tr.append(semester);
        tr.append(grade);
        $("#courses tbody").append(tr);
    }
    function updateGPA(user, courses) {
        let gpa = 0;
        for (let i = 0; i < courses.length; i++) {
            if (courses[i].grade > 90)  gpa  += 5;
            else if (courses[i].grade > 80)  gpa  += 4;
            else if (courses[i].grade > 70)  gpa  += 3;
            else if (courses[i].grade > 60)  gpa  += 2;
            else if (courses[i].grade > 50)  gpa  += 1;
        }
        gpa = Math.round(10*gpa/courses.length)/10;
        user.gpa = gpa;
        $("#gpa strong").text(user.gpa);
    }
});