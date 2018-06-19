'use strict';

var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_GAP = 15;
var TEXT_HEIGHT = 16;
var GAP = 10;
var BAR_COLUMN_HEIGHT = 150;
var BAR_COLUMN_WIDTH = 40;
var BAR_COLUMN_GAP = 50;
var BAR_TRANSITION = 30;

var barX = CLOUD_X + CLOUD_GAP + GAP;
var barY = CLOUD_Y + CLOUD_GAP + GAP + (TEXT_HEIGHT + GAP) * 2;

var renderCloud = function (context, transition, color) {

  context.fillStyle = color;
  context.beginPath();
  context.moveTo(CLOUD_X + transition, CLOUD_Y + transition);
  context.lineTo(CLOUD_X + CLOUD_WIDTH / 2 + transition, CLOUD_Y + CLOUD_GAP + transition);
  context.lineTo(CLOUD_X + CLOUD_WIDTH + transition, CLOUD_Y + transition);
  context.lineTo(CLOUD_X + CLOUD_WIDTH - CLOUD_GAP + transition, CLOUD_Y + CLOUD_HEIGHT / 2 + transition);
  context.lineTo(CLOUD_X + CLOUD_WIDTH + transition, CLOUD_Y + CLOUD_HEIGHT + transition);
  context.lineTo(CLOUD_X + CLOUD_WIDTH / 2 + transition, CLOUD_Y + CLOUD_HEIGHT - CLOUD_GAP + transition);
  context.lineTo(CLOUD_X + transition, CLOUD_Y + CLOUD_HEIGHT + transition);
  context.lineTo(CLOUD_X + CLOUD_GAP + transition, CLOUD_Y + CLOUD_HEIGHT / 2 + transition);
  context.lineTo(CLOUD_X + transition, CLOUD_Y + transition);
  context.fill();
};

var renderTextMessage = function (ctx, numberLine, text) {
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.textBaseline = 'hanging';
  var textLine = numberLine; // считаем от 0
  ctx.fillText(text, barX, CLOUD_Y + CLOUD_GAP + GAP + (TEXT_HEIGHT + GAP) * textLine);
};

var getMaxElement = function (arr) {
  if (arr && (arr.length > 0)) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  } else {
    return null;
  }
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 0, '#fff');

  renderTextMessage(ctx, 0, 'Ура вы победили!');
  renderTextMessage(ctx, 1, 'Список результатов:');

  for (var i = 0; i < players.length; i++) {

    ctx.fillStyle = '#000';
    ctx.textBaseline = 'hanging';

    var maxTime = getMaxElement(times);


    ctx.fillText(players[i], barX + (BAR_COLUMN_WIDTH + BAR_COLUMN_GAP) * i + BAR_TRANSITION, barY + BAR_COLUMN_HEIGHT + GAP);

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, ' + Math.floor(Math.random() * 255) + ', 1)';
    }

    ctx.fillRect(barX + (BAR_COLUMN_WIDTH + BAR_COLUMN_GAP) * i + BAR_TRANSITION, barY + (BAR_COLUMN_HEIGHT - (BAR_COLUMN_HEIGHT * times[i] / maxTime)), BAR_COLUMN_WIDTH, BAR_COLUMN_HEIGHT * times[i] / maxTime);
  }
};
