#Assgn-17)
#Write a prog. to plot a line graph to 
#display the changing onion prices 
#for four weeks.
import matplotlib.pyplot as plt
from numpy import random
import numpy as np
a=np.arange(10)
b=np.arange(10)
#weeks=np.array([3,4,2,2,2,3])
#prices=np.array([1,2,3,2,4,6])
weeks=['Week1','Week2','Week3','Week4']
prices=random.choice(b,size=(4))

plt.bar(weeks,prices)
plt.xlabel('Weeks')
plt.ylabel('Prices')
plt.title('Changing onion prices since four weeks')
plt.show()
