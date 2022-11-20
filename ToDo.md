## 
Create Routes/Pages for Adding/Editing Techs

## 
Form for Editing Techs
    -Should render list at top level and pass it down as props/context/ref and then be able to modify techs in a smaller component.
    -When clicking on a patient, should open a modal form instead of taking to new page. 
##
<!-- Form for adding Patients -->
Form for Editing Patients
    -add styling to checkboxes??

##
Drag and drop for patients onto a tech table with time slots for morning and afternoon.
    - On click/drag for patient, have tech row light up depending on info from each object being true
        -- I.e if patient has a tricare dependency, only highlight techs with that cert, etc. 


##
When creating schedule - user gets prompted about any patients off today, any techs off today.

Then the techsList and patientsList should be filtered to show any of these who are dayoff === false.