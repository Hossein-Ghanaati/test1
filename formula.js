let Fraction = algebra.Fraction;
let Expression = algebra.Expression;
let Equation = algebra.Equation;
/*
  formula object which contain all formulas {
    a formula {
      a variable of the formula{
        result
        equation

      }
    }
  }





*/
let formulaObj = {
  fma : {
    f : {
      result : (m,a) => new Decimal(m).multiply(a).valueOf(),

    },
    a : (f,m) => f/m
  },
  rabeteMostaghel : {
    vzero : (v,a,x) => Math.sqrt(Math.pow(v, 2)+2*a*x)
  },
  FM : {
    f : (m = "m",a = "a") => {
      let equation = new Expression(m).multiply(a);
        return equation.toString();
    }
  }
}
console.log(formulaObj.FM.f(12,10));
let res = new Decimal(0.2);
console.log(res.plus(0.4).valueOf());
console.log(eval(2+25));