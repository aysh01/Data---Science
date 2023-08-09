#Assgn-30)
#Write a prog. to plot a pie chart of gold medals
#won by top 5 countries in 2016.
import pandas as pd
import matplotlib.pyplot as plt
a=pd.read_csv('medals.csv')
plt.pie(x='Gold',labels='Country',data=a,
        autopct='%1.2f%%')
plt.title('Gold Medal won by Top 5 Countries in 2016')
plt.show()
