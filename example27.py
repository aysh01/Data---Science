import numpy as np
import matplotlib.pyplot as plt
a=np.linspace(-np.pi,np.pi,20)
b=np.cos(a)
c=np.sin(a)

x=plt.axes([0.1,0.4,0.8,0.5])
x1=x.plot(a,b,'bs:')

x2=x.plot(a,c,'ro-')
x.legend(labels=('Cos function','Sin Function'),loc='upper left')
x.set_title("Trigonometric functions")
plt.show()

#LinkedIn Post :
https://www.linkedin.com/posts/aayush-kantak-88a7b4271_python-datascience-matplotlib-activity-7093588583386611712-MhqA?utm_source=share&utm_medium=member_android
