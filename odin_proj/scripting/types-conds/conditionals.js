alert(null || 2 || undefined); // returns first truthy val, 2

alert(alert(1) || 2 || alert(3)); // returns 1 then 2 (param in alert, then 1st truthy)

alert(1 && null && 2); // returns null bc its the first falsy

alert(null || (2 && 3) || 4); // returns 3, bc since 2 and 3 are true, returns last true (3), and or returns first truthy (3)
