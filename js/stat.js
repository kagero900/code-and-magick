window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = '#fff';
  ctx.fillRect(100, 10, 420, 270);


  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура, вы победили!', 160, 35);

  var max = -1; //why -1?
  var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / max; //(max - 0)
  var barWidth = 40; //px;
  var indent = 90; //px;
  var initialX = 160; //px;
  var initialY = 230; //px;
  var lineHeight = 30; //px;



  ctx.fillText('Худшее время: ' + Math.round(max) + ' мс у игрока ' +
    names[maxIndex], 120, 60);

  for(var i = 0; i < times.length; i++) {

    var color = 'rgba(0, 0, 255, ' + Math.random().toFixed(2) + ')';

    names[i] == 'Вы' ? ctx.fillStyle = 'rgba(255, 0, 0, 1)' : ctx.fillStyle = color;
    ctx.fillRect(initialX + indent * i, initialY, barWidth, -(times[i] * step));
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], initialX + indent * i, initialY + lineHeight);
  }
};
