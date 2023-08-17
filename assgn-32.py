#Assgn-32)
#Write a Series object that stores the 
#contributions of each section, as shown below.
import pandas as pd
a=['A','B','C','D']
b=[6700,5600,5000,5200]

x=pd.Series(b,a)
print(x)

#Modify the data in section 'A' as 7600 and for
#section 'C' as 7000.
