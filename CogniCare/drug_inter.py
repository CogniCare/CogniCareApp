import pandas as pd
import numpy as np
import csv


df = pd.read_csv("full_medication_list.csv")
#print(df.head)


class patient:

    # checks the drug interaction between two drugs
    def search_drug(drug1,drug2):
        output = ""
        if (drug1 in df.columns ):
            if (df[drug1].str.contains(drug2).any()):
                output = 'not compatable'
            else:
                output = 'compatable'
        else:
            output = 'drug not in list' 

        print(output)
    # will make the nitial calender
    def first_calander(drug,date,time):
        print("done")
        
    # fixes any errors detected in the calender 
    def contradiction_fixer(drug,date_shift):
        print("done")

#drug_list = df['Aricept'].tolist()
#print(drug_list)



#-------------------------------------------
patient.search_drug('weed','Metformin')
patient.search_drug('Aricept','Metformin')
patient.search_drug('Metformin','Aricept')
patient.search_drug('Exelon','Metformin ')