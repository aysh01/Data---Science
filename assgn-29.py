#Assgn-29)
#Write a prog. to eplot a pie chart of 
#popularity of prog. languages.
import matplotlib.pyplot as plt
Prog_lang=['Java','Python','PHP','JavaScript','C#','C++']
Pop=[2.5,4,3,4.4,5.6,4.3]

plt.pie(Pop,labels=Prog_lang,autopct='%1.2f%%')
plt.title('Popularity of Prog. Languages using Pie Chart')
plt.show()
