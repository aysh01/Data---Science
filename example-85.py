import pandas as pd
import numpy as np
a={'1 Score':[90,np.NaN,80],
   '2 Score':[np.NaN,np.sin,10],
   '3 Score':[np.cos,np.cosh,np.NaN]}

df=pd.DataFrame(a)
print('Original DataSet\n',df)
print('\nisnull() method\n',df.isnull())
#isnull() --Returns True, if there're not 
#values detected.

#print('\nfillna(10) method fills the NaN Values\n',df.fillna(10))
#fillna() fills the missing values.

#print('\nfillna(method=backfill)\n',df.fillna(method='backfill'))
#print('\nfillna(method=bfill)\n',df.fillna(method='bfill'))

#print(df.dropna(axis=0))
x=df.dropna(axis=1,how='any')
print(x)
