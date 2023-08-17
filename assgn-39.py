#Assgn-39)
#Write a prog. to print
import pandas as pd
import numpy as np
a=np.random.choice(100,size=(3,3))
b={'Name':['A','B','C'],
   'Desgn':['Cao','Assist.','Tech.'],
   'City':['Pune','Hyderabad','Nashik']}

#DataFrame df 1 column at a time.
df=pd.DataFrame(a,b)
for (col,colSeries) in df.items():
    print('\n\n')
    print('-----------------------------')
    print('\nColumn Index:',col)
    for (data) in df.items():
        print('-----------------------------')
        print('\nContaining:',data)
        print(colSeries)
