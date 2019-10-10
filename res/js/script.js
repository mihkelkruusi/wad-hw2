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
        // Make the courses container unactive
        $("#courses-container").removeClass("active");
        // Make the profile container active
        $("#profile-container").addClass("active");
    });

    $("#add-course-button").click(function () {
        if ($("#add-course").css("display") == "none")
            $("#add-course").css("display", "inline");
        else
            $("#add-course").css("display", "none");
    });

    $("#courses-button").click(function () {
        // Make the profile container unactive
        $("#profile-container").removeClass("active");
        // Make the courses container active
        $("#courses-container").addClass("active");
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
});