$(function() {
    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "New",
            value: 12
        }, {
            label: "Validation",
            value: 30
        }, {
            label: "Completed",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: 'Course 1',
            a: 100,
            b: 90
        }, {
            y: 'Course 2',
            a: 75,
            b: 65
        }, {
            y: 'Course 3',
            a: 50,
            b: 40
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Total comments A', 'Open comments B'],
        hideHover: 'auto',
        resize: true
    });

});
