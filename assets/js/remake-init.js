// THIS FILE INITIALIZES REMAKE'S FRONT END CODE

Remake.init({
  logDataOnSave: true,
  sortable: {sortablejs: Sortable}
});

Remake.onSave(function (res) {
  if (!res.success) {
    crostini("Error saving data", {type: "error"});
  }
});

Remake.onFileUpload(function (res) {
  if (res.success) {
    crostini("File upload successful");
  } else {
    crostini("Error uploading file", {type: "error"});
  }
});

Remake.onAddItem(function (res) {
  if (!res.ajaxResponse.success) {
    crostini("Error adding new item", {type: "error"});
  }
});

document.addEventListener("click", event => {
  if (!event.target.closest(".resume__section-button--settings")) {
    document.querySelectorAll("[temporary\\:key\\:menu]").forEach(elem => {
      Remake.setValueForKeyName({elem, keyName: "menu", value: "false"})
    });
  }
});

