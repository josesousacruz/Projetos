package com.aula02;

import java.util.Objects;
import java.util.stream.IntStream;
import java.util.stream.Stream;

class Aplicacao {
    public static void main(String[] args) {
        System.out.println(new Carro("a"));
        System.out.println(new Carro("x"));
    }
    static class Carro {
        private String marca;
        public Carro(String marca) {
            this.marca = marca;
        }
        public boolean equals(Object o) {
            Carro carro = (Carro) o;
            return Objects.equals(marca, carro.marca);
        }
        public int hashCode() {
            return 1;
        }
    }
}

