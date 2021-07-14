// Returns position of the middle of ball in pixels
function get_ball_center(ball) {
    var x = ball.offsetLeft + ball.offsetParent.offsetLeft + (ball.style.width / 2);
    var y = ball.offsetTop + ball.offsetParent.offsetTop + (ball.style.height / 2);

    return {x: x, y: y};
}

function get_anchor_center(anchor) {
    var x = anchor.offsetLeft + (anchor.style.width / 2);
    var y = anchor.offsetTop + (anchor.style.height / 2);
    
    return {x: x, y: y};
}

// Connect anchor to ball
function draw_string(anchor, ball, stringSvg, stringLine) {
    var ballCenter = get_ball_center(ball);
    var anchorCenter = get_anchor_center(anchor);

    // stringSvg.setAttribute("height", Math.abs(ballCenter.y - anchorCenter.y) + "px");
    // stringSvg.setAttribute("width", Math.abs(ballCenter.x - anchorCenter.x) + "px");

    stringSvg.setAttribute("height", 600 + "px");
    stringSvg.setAttribute("width", 600 + "px");

    stringLine.setAttribute("x1", anchorCenter.x + "px");
    stringLine.setAttribute("y1", anchorCenter.y + "px");
    stringLine.setAttribute("x2", ballCenter.x + "px");
    stringLine.setAttribute("y2", ballCenter.y + "px");

}