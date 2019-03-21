$(document).ready(function(){
  $.ajax({
    url: "http://localhost:3005/line",
    type : "GET",
    success : function(data){
      console.log(data);

      var id = [];
      var hindi = [];
      var marathi = [];
      var maths = [];
      var physics = [];

      for(var i in data) {
        id.push("ID " + data[i].id);
        hindi.push(data[i].hindi);
        marathi.push(data[i].marathi);
        maths.push(data[i].maths);
        physics.push(data[i].physics);
      }

      var chartdata = {
        labels: id,
        datasets: [
          {
            label: "hindi",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(59, 89, 152, 0.75)",
            borderColor: "rgba(59, 89, 152, 1)",
            pointHoverBackgroundColor: "rgba(59, 89, 152, 1)",
            pointHoverBorderColor: "rgba(59, 89, 152, 1)",
            data: hindi
          },
          {
            label: "marathi",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(29, 202, 255, 0.75)",
            borderColor: "rgba(29, 202, 255, 1)",
            pointHoverBackgroundColor: "rgba(29, 202, 255, 1)",
            pointHoverBorderColor: "rgba(29, 202, 255, 1)",
            data: marathi
          },
          {
            label: "maths",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(211, 72, 54, 0.75)",
            borderColor: "rgba(211, 72, 54, 1)",
            pointHoverBackgroundColor: "rgba(211, 72, 54, 1)",
            pointHoverBorderColor: "rgba(211, 72, 54, 1)",
            data: maths
          },
          {
            label: "physics",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(5,255,10,0.8)",
            borderColor: "rgba(5,255,10,0.8)",
            pointHoverBackgroundColor: "rgba(5,255,10,0.8)",
            pointHoverBorderColor: "rgba(5,255,10,0.8)",
            data: physics
          }
        ]
      };

      var ctx = $("#mycanvas");

      var LineGraph = new Chart(ctx, {
        type: 'line',
        data: chartdata
      });
    },
    error : function(data) {

    }
  });
});