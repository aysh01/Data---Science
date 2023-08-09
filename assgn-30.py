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

# Here, Pandas has been used to read a CSV file ('medals.csv').
# An, Excel Sheet is created with columns ['Country','Gold'].
   Country     || Gold
United_States  ||  46
Great Britain  ||  27
China	       ||  26
Russia	       ||  19
Germany	       ||  17

# Save, the above file in same directory with .CSV extension !
