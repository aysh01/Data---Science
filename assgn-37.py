#Assgn-37)
#Consider 2 Series Objects staff & salaries
#that stores the no. of people in various
#office branch & salaries distributed in these
#branches.
import pandas as pd
import numpy as np
a=np.random.choice(1000,size=(4))
b=np.random.randint(1000,size=(4))

c=['Branch A','Branch B','Branch C','Branch D'] 
#No. of Office Branches

staff=pd.Series(a,c)
#Object staff contains no. of people 
#in various branch
salary=pd.Series(b,c)
#Object salary contains salaries 
#distributed in various branches

print('No. of People in Various Branches:')
print(staff)

print('\nSalaries Distributed in Various Branches:')
print(salary)

#Write a prog. to create another series
#object that stores average salary per branch
print('\nAverage Salary of People per Branch:')
#print(b)
arr=salary / 4 #arr contains Average Salary
print(arr)

#& create DataFrame.
x={'No. of People':[staff],
   'Salaries Distributed':[salary],
   'Average Salary':[arr]}
x=pd.DataFrame(x)
print(x)

