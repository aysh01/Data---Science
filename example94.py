#Find root of the eqn. x+cos(x).
from scipy.optimize import root
from math import cos
def eqn(x):
    return x+cos(x)
a=root(eqn,0)
print('Root of Equation [x+cos(x)]:',a.x)
