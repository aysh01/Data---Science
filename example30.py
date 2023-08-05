#timeseries graph()
import matplotlib.pyplot as plt
from numpy import random
import numpy as np
#a=np.arange(4,20)
#b=random.choice(a,size=(6))
a=np.array([1.4,0.4,50.3,4.5,4.3,4,4.6])
b=np.array([2.3,0.1,5.2,0.1,5.7,5,6.1])
#x=np.arange(5,15)
#c=random.choice(x,size=(6))

fig,axs=plt.subplots()
axs.xcorr(a,b,maxlags=6,color='indigo')
axs.set_axis_off()
axs.set_title('Time Series Graph.')
plt.show()
