from fpdf import FPDF

# Create PDF
pdf = FPDF()
pdf.add_page()
pdf.set_font("Arial", size=12)

# Day A Chart
day_a_text = """
Day A - Meat Day

Time          Meal                                              Calories   Protein
---------------------------------------------------------------------------------
Morning       2 Bananas + 2 Eggs + Peanuts + Soaked Chickpeas   680 cal    26g
Lunch         1 cup Rice + 1 cup Lentils + 100g Meat + Veg       720 cal    29g
Afternoon     Option 1: Flattened Rice + Milk + Banana + Jaggery 480 cal    8g
              Option 2: Boiled Corn + Raisins + Dates            345 cal    6g
              Option 3: Fruit Salad + Nuts                        300 cal    5g
Dinner        1 cup Rice + 2 Eggs + Mashed Potato/Vegetables    500 cal    12g
"""

# Day B Chart
day_b_text = """
Day B - Eggs Only Day

Time          Meal                                              Calories   Protein
---------------------------------------------------------------------------------
Morning       2 Bananas + 2 Eggs + Peanuts + Soaked Chickpeas   680 cal    26g
Lunch         1 cup Rice + 1 cup Lentils + 2 Eggs + Veg          660 cal    21g
Afternoon     Option 1: Flattened Rice + Milk + Banana + Jaggery 480 cal    8g
              Option 2: Boiled Corn + Raisins + Dates            345 cal    6g
              Option 3: Fruit Salad + Nuts                        300 cal    5g
Dinner        1 cup Rice + 2 Eggs + Vegetables/Mashed Potato    500 (+120) cal    12g (+6g)
"""

pdf.multi_cell(0, 7, day_a_text)
pdf.add_page()
pdf.multi_cell(0, 7, day_b_text)

# Save PDF
pdf.output("Weight_Gain_2day_Charts.pdf")
print("PDF created successfully!")
