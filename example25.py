#plot()
#Python prog. to illustrate linear-plotting
import matplotlib.pyplot as plt
year=[2004,2010,2016,2017]
e_india=[100.6,200.4,300,40.6]
e_bangladesh=[10.5,40.5,44.2,2.8]

plt.plot(year,e_india,color='indigo',label='India')
plt.plot(year,e_bangladesh,color='Violet',label='Bangladesh')
plt.xlabel('Years')
plt.ylabel('Power Consumption')
plt.title("Electricity Consumption of India & Bangladesh in two Decades")
plt.legend()
plt.show()
