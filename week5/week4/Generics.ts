function display<T>(value: T): T {
    return value;
}

console.log(display<string>("Hello"));
console.log(display<number>(100));
/*<T> → generic type parameter
T → represents the type passed to the function
display<string>() → function works with strings
display<number>() → function works with numbers*/