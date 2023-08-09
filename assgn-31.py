#Assgn-31)
#Write a prog. to plot a pie chart of 
#popularity of prog. languages. 
#Make Widges of the pie chart.
import matplotlib.pyplot as plt
Prog_lang=['Java','Python','PHP',
           'JavaScript','C#','C++']
Pop=[0.4,0.12,0.3,0.1,1.2,0.5]

plt.pie(Pop,labels=Prog_lang,explode=Pop,
        autopct='%1.2f%%')
plt.show()
