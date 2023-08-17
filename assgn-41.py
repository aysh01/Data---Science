#Assgn-41)
#Write a prog. to add column namely orders having
#values 6000,6700,6200 and 6000 respectively 
#for the zones A,B,C,D. Create new row for new zone E.
#Add dummy values for the same.
import pandas as pd
a={'Target':{'Zone A':56000,'Zone B':70000,
             'Zone C':75000,'Zone D':60000},
   'Sales':{'Zone A':58000,'Zone B':68000,
            'Zone C':78000,'Zone D':61000}}

df1=pd.DataFrame(a)
b=({'Orders':{'Zone A':6000,'Zone B':6700,
                   'Zone C':6200,'Zone D':6000}})
df2=pd.DataFrame(b)
x=df1.join(df2)
print(x)
