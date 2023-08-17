#Assgn-38)
#Write a prog. to print
import pandas as pd
import numpy as np
a=np.random.choice(100,size=(2))
b=['A','B']

#DataFrame df 1 row at a time.
df=pd.DataFrame(a,b)
for (row,rowSeries) in df.iterrows():
    print('\n\n')
    print('-----------------------------')
    print('\nRow Index:',row)
    for (data) in df.iterrows():
        print('-----------------------------')
        print('\nContaining:',data)
        print(rowSeries)
