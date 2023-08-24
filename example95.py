#Minimize the function x^2+x+2 with BFGS.
from scipy.optimize import minimize
def eqn(x):
    return x**2 + x+2
a=minimize(eqn,0,method='BFGS')
print(a)
