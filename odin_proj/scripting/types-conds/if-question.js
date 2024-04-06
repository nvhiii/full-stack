if (-1 || 0) alert("first"); // will execute, anything other than 0 is true
if (-1 && 0) alert("second"); // will not execute, since 0 is not true
if (null || (-1 && 1)) alert("third"); // will print, since -1 && 1 is true
