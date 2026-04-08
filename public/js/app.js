
var _universalCheckboxId = null;

function handleInputTextBasedOnCheckbox(checkBoxId, inputTextId)
{
	//$('#readingSupportOther').on('click',function(){
		if (checkBoxId.checked)
		{
			$("#" + inputTextId).val('');
			$("#" + inputTextId).removeAttr("readonly");
		}
		else
		{
			$("#" + inputTextId).val('');
			$("#" + inputTextId).attr("readonly", "readonly");
		}
	//});
}



function handleInputTextBasedOnRadio(checkBoxId, inputTextId)
{
		if (document.getElementById(checkBoxId).checked)
		{
			$("#" + inputTextId).val('');
			$("#" + inputTextId).removeAttr("readonly");
		}
		else
		{
			$("#" + inputTextId).val('');
			$("#" + inputTextId).attr("readonly", "readonly");
		}
}




$(document).ready(function() {
    $('#searchClick').click(function(){
		$('#searchForm').submit();
	});
	
	
});



	/*function onclickMenu()
	{
		$('#max-sidebar').hide();
		$('#min-sidebar').show();
	}
	
	function showSubMenu(submenu)
	{
		$('.dropdown-content').hide();
		$('#'+submenu).show();
	}
	
	function leaveMenu(submenu)
	{
			alert(111);
	}*/


function stripHtml(html)
{
   let tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}


function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}

function closeModalForAddNote()
{
	var modal = document.getElementById("notesModal");
	modal.style.display = "none";
}


function openModalForAddNote(studentName, studentDetailID, enrolmentID, changeRequestNo, eaalId)
{
	$('#notes').val('');
	$('#studentNameModalForNotes').html(studentName);
	$('#studentNameForNotes').val(studentName);
	$('#crIDForNotes').val(changeRequestNo);
	$('#CRIDTextForNotes').html(changeRequestNo);
	$('#enrolmentIDForNotes').val(enrolmentID);
	$('#eaalIdForNotes').val(eaalId);
	$('#studentDetailIDForNotes').val(studentDetailID);
	var modal = document.getElementById("notesModal");
	modal.style.display = "block";
}



function openModalForPutOnHold(studentName, studentDetailID, enrolmentID, universalCheckboxId, changeRequestNo, eaalId)
{
	$('#reasonForOnHold').val('');
	$('#studentNameModal').html(studentName);
	$('#enrolmentID').val(enrolmentID);
	$('#studentDetailID').val(studentDetailID);
	$('#studentName').val(studentName);
	$('#eaalId').val(eaalId);
	$('#changeRequestNo').val(changeRequestNo);
	$('#changeRequestNoModal').html(changeRequestNo);
	$('#holdType').val('add');
	var modal = document.getElementById("putOnHoldModal");
	modal.style.display = "block";
	_universalCheckboxId = universalCheckboxId;
}


function openModalForRemoveFromHold(studentName, studentDetailID, enrolmentID, universalCheckboxId, changeRequestNo, eaalId)
{
	$('#reasonForOnHold').val('');
	$('#studentNameModal').html(studentName);
	$('#enrolmentID').val(enrolmentID);
	$('#studentDetailID').val(studentDetailID);
	$('#studentName').val(studentName);
	$('#eaalId').val(eaalId);
	$('#changeRequestNo').val(changeRequestNo);
	$('#changeRequestNoModal').html(changeRequestNo);
	$('#holdType').val('remove');
	$('#reasonForOnHold').val('Remove from hold');
	$('#putOnHoldForm').submit();
}


function closeModalForPutOnHold()
{
	var modal = document.getElementById("putOnHoldModal");
	modal.style.display = "none";
	$('#workedOn' + _universalCheckboxId).prop("checked", false);
	_universalCheckboxId = null;
}


function openModal(studentName, studentDetailID, offeringID, universalCheckboxId)
{
	$('#studentNameModal').html(studentName);
	$('#offeringID').val(offeringID);
	$('#studentDetailID').val(studentDetailID);
	$('#studentName').val(studentName);
	var modal = document.getElementById("myModal");
	modal.style.display = "block";
	_universalCheckboxId = universalCheckboxId;
}

function openModalForApprentice(studentName, studentDetailID, offeringID, universalCheckboxId, isTextAreaShow, isRadioShow)
{
	$('#studentNameModal').html(studentName);
	$('#offeringID').val(offeringID);
	$('#studentDetailID').val(studentDetailID);
	$('#studentName').val(studentName);
	var modal = document.getElementById("myModal");
	modal.style.display = "block";
	_universalCheckboxId = universalCheckboxId;
	$('#reasonForNoEAA').hide();
	$('.reasonCodeRadio').hide();
	if(isTextAreaShow==true)
	{
		$('#reasonForNoEAA').show();
		$('#maxCharacters').show();
		$('#reasonCodeType').val(0);
	}
	if(isRadioShow==true)
	{
		$('.reasonCodeRadio').show();
		$('#maxCharacters').hide();
		$('#reasonCodeType').val(1);
	}
}


function closeModal()
{
	var modal = document.getElementById("myModal");
	modal.style.display = "none";
	$('#workedOn' + _universalCheckboxId).prop("checked", false);
	_universalCheckboxId = null;
}


function handleUpdateStage(urlPrefix, eaaId, stageId, changeRequestNumber, nextStageId)
{
	
	$('#updateStageChangeRequestNo').val(changeRequestNumber);
	$('#updateStageID').val(stageId);
	$('#updateStageEAALId').val(eaaId);
	$('#nextStageId').val(nextStageId);
	
	var url = urlPrefix + 'update-stage';
	//alert(urlPrefix);
	$('#updateStageForm').attr("action", url);	//"/EAARequest/update-stage"
	$('#updateStageForm').submit();
}

function submitNoEAAStudentNoLongerWantsEAA(studentName, studentDetailID, offeringID, ealId)
{
	$('#studentNameModal').html(studentName);
	$('#offeringID').val(offeringID);
	$('#studentDetailID').val(studentDetailID);
	$('#reasonCodeType').val(-1);
	$('#ealId').val(ealId);
	$('#applyNoEAARequiredForm').submit();
}


function submitNoEAA(studentName, studentDetailID, offeringID)
{
	$('#studentNameModal').html(studentName);
	$('#offeringID').val(offeringID);
	$('#studentDetailID').val(studentDetailID);
	$('#reasonCode').val(-1);
	$('#applyNoEAARequiredForm').submit();
}


function submitCompletedNoEAA(eaaId)
{
	$('#eidConfirm').val(eaaId);
	$('#applyNoEAARequiredConfirmForm').submit();
}

function submitNotWantEAA(studentName, studentDetailID, offeringID)
{
	$('#studentNameModal').html(studentName);
	$('#offeringID').val(offeringID);
	$('#studentDetailID').val(studentDetailID);
	$('#reasonCode').val(2);
	//alert(11);
	$('#applyNoEAARequiredForm').submit();
}

function submitStudentNoLongerWantsEAA(studentName, studentDetailID, offeringID, ealId)
{
	$('#studentNameModal').html(studentName);
	$('#offeringID').val(offeringID);
	$('#studentDetailID').val(studentDetailID);
	$('#reasonCode').val(2);
	$('#ealId').val(ealId);
	//alert(11);
	//$('#applyNoEAARequiredForm').submit();
	var modal = document.getElementById("myModal");
	modal.style.display = "block";
	_universalCheckboxId = universalCheckboxId;
}


function removeFromNotWantEAAList(studentDetailID, offeringID)
{
	$('#offeringID').val(offeringID);
	$('#studentDetailID').val(studentDetailID);
	$('#removeFromNoEAARequiredList').submit();
}

function rejectEAAAdmin(studentName, studentDetailID, ealId)
{
	$('#studentNameModalForRejection').html(studentName);
	$('#studentDetailIDForRejection').val(studentDetailID);
	$('#reasonCodeForRejection').val(2);
	$('#ealIdForRejection').val(ealId);
	//alert(11);
	//$('#applyNoEAARequiredForm').submit();
	var modal = document.getElementById("myModal");
	modal.style.display = "block";
}

/*function handleReasonForReject()
{
	if ($(this).checked)
	{
		alert(11);
	}
}*/

$('.reasonsForReject').click(function(event){
	if($(this).val()=='OTHER')
	{
		$('#reasonForOther').show();
		$('#reasonForOther').val('');
	}
	else
	{
		$('#reasonForOther').hide();
		$('#reasonForOther').val('');
	}
});


var max_length = 175;
$('#reasonForNoEAA').keyup(function (event) {
    var len = max_length - $(this).val().length;
	if($(this).val().length==max_length)
	{
		if(len==0 || len>1)
		{
			txt = '<span style="color: '+(len==0 ? 'red' : '#000')+'">' + len + ' character(s) remaining.</span>';
		}
		else
		{
			txt = '<span style="color: #000">' + len + ' character remaining.</span>';
		}
		$('#maxCharactersCount').html(txt);
		event.preventDefault();
		return;
	}
	else
	{
	
		var txt = '';
		if(len==0 || len>1)
		{
			txt = '<span style="color: '+(len==0 ? 'red' : '#000')+'">' + len + ' character(s) remaining.</span>';
		}
		else
		{
			txt = '<span style="color: #000">' + len + ' character remaining.</span>';
		}
		
		
		$('#maxCharactersCount').html(txt);
	}
});









$('#reasonForNoEAA').on("cut", function(e) {
	e.preventDefault();
});
$('#reasonForNoEAA').on("copy", function(e) {
	e.preventDefault();
});
$('#reasonForNoEAA').on("paste", function(e) {
	e.preventDefault();
});