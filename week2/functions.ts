class Main {

    // Function with no parameter and no return type
    static void greet() {
        System.out.println("Hello!");
    }

    // Function with parameters but no return type
    static void add(int a, int b) {
        System.out.println("Sum = " + (a + b));
    }

    // Function with parameters and a return type
    static int multiply(int a, int b) {
        return a * b;
    }

    public static void main(String[] args) {

        // Calling function with no parameters
        greet();

        // Calling function with parameters
        add(10, 20);

        // Calling function with parameters and return value
        int result = multiply(5, 4);
        System.out.println("Product = " + result);
    }
}