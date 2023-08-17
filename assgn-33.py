#Assgn-33)
#Write a students in classes 11 & 12  in 
#3 Streams ('Science','Commerce','Humanities') are
#stored in 2 series objects c1 & c2.
import pandas as pd
import numpy as np
a=np.random.choice(200,size=(3)) 
#Students in Class 11
b=np.random.choice(300,size=(3)) 
#Students in Class 12

c=['Science','Commerce','Humanities'] #Streams

x=pd.Series(a,c) #Series1
y=pd.Series(b,c) #Series2
print('Students in Class 11:')
print(x)

print('\nStudents in Class 12:')
print(y,"\n")


#Write a Code to find total no. of students 
#in classes 11 & 12 Stream wise.

z=np.add(a,b)
#print(pd.Series(z,c))
print("Total Number of Students in Class 11 & 12:")
print(z)
