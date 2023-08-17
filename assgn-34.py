#Assgn-34)
#Obj1 Stores the details of Population in four
#metro cities of India and Obj2 Stores the total
#Average Income reported in previous year in each
#of these metros. Calculate income per capita for
#each of these metro cities.
import pandas as pd
import numpy as np
a=np.random.choice(1000,size=(4))
b=np.random.randint(1000,size=(4))

c=['A','B','C','D'] #Four metro cities

obj1=pd.Series(a,c) 
#Obj1 containing population of 
#four metro cities of india
obj2=pd.Series(b,c)
#Obj2 containing Average Income of prevoius year 
#in each of these metro cities

print('Population of Four Metro Cities:')
print(obj1)

print('\nAverage Income of Previous Year of Metro Cities:')
#print(b)
arr=obj2 / 4 #arr contains Average Income
print(arr)

#Calculate income per capita for each of these 
#metro cities.
x=arr * obj2 / 4 #x stores the Income per capita
print('\nIncome per capita of four metro cities:')
print(x)
