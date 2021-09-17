export function showCurPos(): void {
  // credit to https://stackoverflow.com/questions/12888584/is-there-a-way-to-tell-chrome-web-debugger-to-show-the-current-mouse-position-in
  document.onmousemove = function (e) {
    var x = e.pageX;
    var y = e.pageY;
    (e!.target! as any).title! = "X is " + x + " and Y is " + y;
  };
}

export function logUpdatedDiff(
  prev: { [key: string]: any },
  current: { [key: string]: any }
): void {
  const now = Object.entries(current);
  const added = now.filter(([key, val]) => {
    if (prev[key] === undefined) return true;
    if (prev[key] !== val) {
      console.log(
        `${key}
        %c- ${JSON.stringify(prev[key])}
        %c+ ${JSON.stringify(val)}`,
        "color:red;",
        "color:green;"
      );
    }
    return false;
  });
  added.forEach(([key, val]) =>
    console.log(
      `${key}
        %c+ ${JSON.stringify(val)}`,
      "color:green;"
    )
  );
}
