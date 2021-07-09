<template>
  <h3>Company Setting</h3>
  <div class="mb-3">
    <label for="formGroupExampleInput" class="form-label">Company Name</label>
    <input
      type="text"
      class="form-control"
      id="formCompanyName"
      placeholder="Your Company Name "
    />
  </div>
  <div class="row g-3">
    <div class="col">
      <label class="form-label">Office Start Time</label>
      <input type="time" class="form-control" id="formOfficeStartTime" />
    </div>
    <div class="col">
      <label class="form-label">Office End Time</label>
      <input type="time" class="form-control" id="OfficeEndTime" />
    </div>
  </div>
  <br />
  <h5>About Employee Leave</h5>
  <div class="row g-3">
    <div class="col">
      <label for="formEmployeeLeave" class="form-label"
        >Total Employee Leave</label
      ><input type="number" class="form-control" />
    </div>
    <div class="col">
      <label for="formCasualLeave" class="form-label">Casual Leave</label>
      <input type="number" class="form-control" />
    </div>
    <div class="col">
      <label for="formAnnualLeave" class="form-label">Annual Leave</label>
      <input type="number" class="form-control" />
    </div>
    <div class="col">
      <label for="formSickLeave" class="form-label">Sick Leave</label>
      <input type="number" class="form-control" />
    </div>
  </div>
  <br />
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Save</button>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
