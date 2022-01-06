// Métier
class CalculatricePoo {

    // Private attributes
    #_a;
    #_b;
    #_solution;
    #_operation;

    // Setters and getters
    get a() {
      return this.#_a
    }
    set a(value){
        this.#_a = value;
    }
    get b() {
        return this.#_b
    }
    set b(value){
          this.#_b = value;
    }
 
    get operation() {
        return this.#_operation
    }
    set operation(value){
          this.#_operation = value;
    }

    get solution() {
        return this.#_solution
    }
    set solution(value){
          this.#_solution = value;
    }

    Calculer(){
        this.#_solution = undefined;
        switch (this.#_operation) {
            case '+':
                this.#_solution = this.#_a + this.#_b;
                break;
            case '-':
                this. #_solution = this.#_a - this.#_b;
                    break;
            default:
                break;
        }
        return this.#_solution;
    }

    Init(){
        this.#_a = undefined;
        this.#_b = undefined;
        this.#_operation = undefined;
    }

  }