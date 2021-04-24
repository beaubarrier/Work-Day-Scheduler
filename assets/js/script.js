var todaysDate = moment().format('MM-DD-YYYY hh:mma');


//sets current date and time at top_
$("#currentDay").text(todaysDate);



//functions for background colors_
var backgroundColors = $(function () {

    var nineAmFunc = $(function () {
        var start9am = moment('9:00:00am', 'hh:mm:ssa')
        var end9am = moment('9:59:59am', 'hh:mm:ssa')

        if (moment().isBetween(start9am, end9am)) {
            $("#9amBtn").addClass("bg-success")
        }
        else if (moment().isBefore(start9am)) {
            $("#9amBtn").addClass("bg-info")
        }
        else {
            $("#9amBtn").addClass("bg-secondary")
        }
    })

    var tenAmFunc = $(function () {
        var start10am = moment('10:00:00am', 'hh:mm:ssa')
        var end10am = moment('10:59:59am', 'hh:mm:ssa')
        if (moment().isBetween(start10am, end10am)) {
            $("#10amBtn").addClass("bg-success")
        }
        else if (moment().isBefore(start10am)) {
            $("#10amBtn").addClass("bg-info")
        }
        else {
            $("#10amBtn").addClass("bg-secondary")
        }
    })

    var elevenAmFunc = $(function () {
        var start11am = moment('11:00:00am', 'hh:mm:ssa')
        var end11am = moment('11:59:59am', 'hh:mm:ssa')
        if (moment().isBetween(start11am, end11am)) {
            $("#11amBtn").addClass("bg-success")
        }
        else if (moment().isBefore(start11am)) {
            $("#11amBtn").addClass("bg-info")
        }
        else {
            $("#11amBtn").addClass("bg-secondary")
        }
    })

    var twelvePmFunc = $(function () {
        var start12pm = moment('12:00:00pm', 'hh:mm:ssa')
        var end12pm = moment('12:59:59pm', 'hh:mm:ssa')
        if (moment().isBetween(start12pm, end12pm)) {
            $("#12pmBtn").addClass("bg-success")
        }
        else if (moment().isBefore(start12pm)) {
            $("#12pmBtn").addClass("bg-info")
        }
        else {
            $("#12pmBtn").addClass("bg-secondary")
        }
    })

    var onePmFunc = $(function () {
        var start1pm = moment('1:00:00pm', 'hh:mm:ssa')
        var end1pm = moment('1:59:59pm', 'hh:mm:ssa')
        if (moment().isBetween(start1pm, end1pm)) {
            $("#1pmBtn").addClass("bg-success")
        }
        else if (moment().isBefore(start1pm)) {
            $("#1pmBtn").addClass("bg-info")
        }
        else {
            $("#1pmBtn").addClass("bg-secondary")
        }
    })

    var twoPmFunc = $(function () {
        var start2pm = moment('2:00:00pm', 'hh:mm:ssa')
        var end2pm = moment('2:59:59pm', 'hh:mm:ssa')
        if (moment().isBetween(start2pm, end2pm)) {
            $("#2pmBtn").addClass("bg-success")
        }
        else if (moment().isBefore(start2pm)) {
            $("#2pmBtn").addClass("bg-info")
        }
        else {
            $("#2pmBtn").addClass("bg-secondary")
        }
    })

    var threePmFunc = $(function () {
        var start3pm = moment('3:00:00pm', 'hh:mm:ssa')
        var end3pm = moment('3:59:59pm', 'hh:mm:ssa')
        if (moment().isBetween(start3pm, end3pm)) {
            $("#3pmBtn").addClass("bg-success")
        }
        else if (moment().isBefore(start3pm)) {
            $("#3pmBtn").addClass("bg-info")
        }
        else {
            $("#3pmBtn").addClass("bg-secondary")
        }
    })

    var fourPmFunc = $(function () {
        var start4pm = moment('4:00:00pm', 'hh:mm:ssa')
        var end4pm = moment('4:59:59pm', 'hh:mm:ssa')
        if (moment().isBetween(start4pm, end4pm)) {
            $("#4pmBtn").addClass("bg-success")
        }
        else if (moment().isBefore(start4pm)) {
            $("#4pmBtn").addClass("bg-info")
        }
        else {
            $("#4pmBtn").addClass("bg-secondary")
        }
    })

    var fivePmFunc = $(function () {
        var start5pm = moment('5:00:00pm', 'hh:mm:ssa')
        var end5pm = moment('5:59:59pm', 'hh:mm:ssa')
        if (moment().isBetween(start5pm, end5pm)) {
            $("#5pmBtn").addClass("bg-success")
        }
        else if (moment().isBefore(start5pm)) {
            $("#5pmBtn").addClass("bg-info")
        }
        else {
            $("#5pmBtn").addClass("bg-secondary")
        }
    })

})  // end backgroundColors functions_


//these functions save the input value to local storage on click_
$("#button-addon1").click(function () {
    $('textarea[type="text"]').each(function () {
        var key = $("#9amBtn").attr('id');
        var value = $("#9amBtn").val();
        localStorage.setItem(key, value);
    });

})

$("#button-addon2").click(function () {
    $('textarea[type="text"]').each(function () {
        var key = $("#10amBtn").attr('id');
        var value = $("#10amBtn").val();
        localStorage.setItem(key, value);
    });
})

$("#button-addon3").on('click', function () {
    $('textarea[type="text"]').each(function () {
        var key = $("#11amBtn").attr('id');
        var value = $("#11amBtn").val();
        localStorage.setItem(key, value);
    });
})

$("#button-addon4").on('click', function () {
    $('textarea[type="text"]').each(function () {
        var key = $("#12pmBtn").attr('id');
        var value = $("#12pmBtn").val();
        localStorage.setItem(key, value);
    });
})

$("#button-addon5").on('click', function () {
    $('textarea[type="text"]').each(function () {
        var key = $("#1pmBtn").attr('id');
        var value = $("#1pmBtn").val();
        localStorage.setItem(key, value);
    });
})

$("#button-addon6").on('click', function () {
    $('textarea[type="text"]').each(function () {
        var key = $("#2pmBtn").attr('id');
        var value = $("#2pmBtn").val();
        localStorage.setItem(key, value);
    });
})

$("#button-addon7").on('click', function () {
    $('textarea[type="text"]').each(function () {
        var key = $("#3pmBtn").attr('id');
        var value = $("#3pmBtn").val();
        localStorage.setItem(key, value);
    });
})

$("#button-addon8").on('click', function () {
    $('textarea[type="text"]').each(function () {
        var key = $("#4pmBtn").attr('id');
        var value = $("#4pmBtn").val();
        localStorage.setItem(key, value);
    });
})

$("#button-addon9").on('click', function () {
    $('textarea[type="text"]').each(function () {
        var key = $("#5pmBtn").attr('id');
        var value = $("#5pmBtn").val();
        localStorage.setItem(key, value);
    });
})  // save button functions end here_
