let bmenubtn = document.querySelector(".burger_menu_btn");
let bmenu = document.querySelector(".bubble");
let bmenuclosebtn = document.querySelector(".bubble .close_menu_btn");
let hselectbtn = document.querySelector(".header_bottom_select_btn");
let hselectval = document.querySelector(
  ".header_bottom_select_btn .select_val",
);
let hselectmenu = document.querySelector(".header_bottom_select_menu");
let hselectoption = document.querySelectorAll(".header_bottom_select_menu li");
let chatlistbtn = document.querySelectorAll(".chat_list .list_item");
let actionsbtn = document.querySelector(".messages_layout_header .actions_btn");
let actionsmenu = document.querySelector(
  ".messages_layout_header .actions_menu",
);
let mactionsbtn = document.querySelectorAll(".management_wrapper .actions_btn");
let mactionsmenu = document.querySelector(
  ".management_wrapper .actions_menu_wrapper",
);
let noteaddbtn = document.querySelector(".note_add_btn");
let noteform = document.querySelector(".note_form");
let notesavebtn = document.querySelector(".note_save_btn");
let notecancelbtn = document.querySelector(".note_cancel_btn");
let emailedit = document.querySelector(".email_edit_btn");
let modal = document.querySelectorAll(".modal_wrapper");
let modalbtn = document.querySelectorAll(".modal_btn");
let closemodal = document.querySelectorAll(".close_modal");
let sendimgall = document.querySelectorAll(".send_img");
let sendimg = document.querySelectorAll(".send_img");
let rotatebtn = document.querySelectorAll(".rotate_btn");
let sendimgdetele = document.querySelectorAll(".send_img_svg .detete_btn");
let callfilebtn = document.querySelector(".call_file_btn");
let calledfile = document.querySelector("#calledfile");
let filename = document.querySelector(".file_name");
let filesize = document.querySelector(".file_size");
let sendimgnosvg = document.querySelector(".send_img_nosvg");
let sendimage = document.querySelector(".send_file_modal .send_image_in");
let sendimgsvg = document.querySelector(".send_img_svg");
let addfilebtn = document.querySelector(".add_file_btn");
let addfile = document.querySelector("#addfile");
let addadminbtn = document.querySelector(".add_admin_btn");
let addnewadmin = document.querySelector(".add_new_admin");
let adminsavebtn = document.querySelector(".admin_save_btn");
let noteslist = document.querySelector(".notes_list");
let noteslistitem = document.querySelectorAll(".notes_list .list_item");
let usersmodalbtn = document.querySelector(".users_modal_btn");
let chatfolders = document.querySelector(".chatfolders");
let management = document.querySelector(".management_wrapper");
let managementbackbtn = document.querySelectorAll(".management_back_btn");
let action = document.querySelectorAll(".table .action");

bmenubtn.onclick = () => {
  bmenu.classList.add("menu_active");
};
bmenuclosebtn.onclick = () => {
  bmenu.classList.remove("menu_active");
};
hselectbtn.onclick = () => {
  hselectbtn.classList.toggle("active_btn");
  hselectmenu.classList.toggle("active_menu");
};
hselectoption.forEach((option) => {
  option.onclick = () => {
    hselectval.innerHTML = option.innerHTML;
    hselectbtn.classList.toggle("active_btn");
    hselectmenu.classList.toggle("active_menu");
  };
});
chatlistbtn.forEach((chatitem) => {
  chatitem.onclick = () => {
    chatlistbtn.forEach((element) => {
      element.classList.remove("active");
    });
    chatitem.classList.add("active");
  };
});
actionsbtn.onclick = () => {
  actionsmenu.classList.toggle("menu_active");
};
mactionsbtn.forEach((btn) => {
  btn.onmouseover = () => {
    var rect = btn.getBoundingClientRect();
    var bodyRect = document.getElementById("main").getBoundingClientRect();
    offsettop = rect.top - bodyRect.top;
    mactionsmenu.classList.add("menu_active");
    mactionsmenu.style.top = offsettop - 130 + "px";
  };
});
let notesheight = 0;
noteslistitem.forEach((element, index) => {
  if (index <= 2) {
    notesheight += element.clientHeight;
  }
});
noteslist.style.maxHeight = notesheight + 20 + "px";
noteaddbtn.onclick = () => {
  noteaddbtn.classList.add("d-none");
  noteform.classList.remove("d-none");
  document.querySelector(".notes_list").classList.add("notes_list_active");
};
notecancelbtn.onclick = () => {
  noteaddbtn.classList.remove("d-none");
  noteform.classList.add("d-none");
  document.querySelector(".notes_list").classList.remove("notes_list_active");
};
modalbtn.forEach((btn) => {
  btn.onclick = () => {
    modal.forEach((modal) => {
      if (
        modal.getAttribute("data-filter") == btn.getAttribute("data-filter")
      ) {
        modal.classList.add("modal_active");
      } else {
        modal.classList.remove("modal_active");
      }
    });
  };
});
closemodal.forEach((btn) => {
  btn.onclick = () => {
    modal.forEach((modal) => {
      modal.classList.remove("modal_active");
    });
  };
});
let rotate = 0;
callfilebtn.onclick = () => {
  calledfile.click();
};
let sendfile = [];
calledfile.onchange = (e) => {
  sendfile = [];

  Array.from(calledfile.files).forEach((file) => {
    sendfile.push(file);
  });
  let filepath = URL.createObjectURL(calledfile.files[0]);
  let filetype = calledfile.files[0].type;
  sendfile.forEach((file, index) => {
    sendimg.forEach((img) => {
      if (filetype != "image/svg+xml") {
        let sendimg = img.setAttribute("src", `${filepath}`);
        sendimgnosvg.classList.remove("d-none");
        sendimgsvg.classList.add("d-none");
      } else {
        img.setAttribute("src", `${filepath}`);
        filename.innerHTML = file.name;
        filesize.innerHTML = file.size + " " + "KB";
        sendimgsvg.classList.remove("d-none");
        sendimgnosvg.classList.add("d-none");
      }
    });
  });
  modal.forEach((modal) => {
    if (
      modal.getAttribute("data-filter") == e.target.getAttribute("data-filter")
    ) {
      modal.classList.add("modal_active");
    } else {
      modal.classList.remove("modal_active");
    }
  });
};
addfilebtn.onclick = () => {
  addfile.click();
};
addadminbtn.onclick = () => {
  addadminbtn.classList.add("d-none");
  addnewadmin.classList.remove("d-none");
};
adminsavebtn.onclick = () => {
  addadminbtn.classList.remove("d-none");
  addnewadmin.classList.add("d-none");
};
usersmodalbtn.onclick = () => {
  chatfolders.classList.toggle("chatfolders_active");
};
managementbackbtn.forEach((backbtn) => {
  backbtn.onclick = () => {
    management.classList.toggle("management_active");
  };
});
action.forEach((item, i) => {
  item.children[0].onclick = () => {
    action.forEach((element) => {
      element.children[1].classList.remove("menu_active");
    });
    item.children[1].classList.add("menu_active");
  };
});
noteslist.onscroll = () => {
  mactionsmenu.classList.remove("menu_active");
};
document.querySelector(".management_wrapper_scroll").onscroll = () => {
  mactionsmenu.classList.remove("menu_active");
};
window.onresize = (e) => {
  if (document.querySelector("html").clientWidth <= 576) {
    noteslist.style.maxHeight = notesheight + 10 + "px";
    mactionsbtn.forEach((btn) => {
      btn.onmouseover = () => {
        var rect = btn.getBoundingClientRect();
        var bodyRect = document.getElementById("main").getBoundingClientRect();
        offsettop = rect.top - bodyRect.top;
        mactionsmenu.classList.add("menu_active");
        mactionsmenu.style.top = offsettop - 92 + "px";
      };
    });
  } else {
    mactionsbtn.forEach((btn) => {
      btn.onmouseover = () => {
        var rect = btn.getBoundingClientRect();
        var bodyRect = document.getElementById("main").getBoundingClientRect();
        offsettop = rect.top - bodyRect.top;
        mactionsmenu.classList.add("menu_active");
        mactionsmenu.style.top = offsettop - 120 + "px";
      };
    });
  }
};
window.onclick = (e) => {
  if (
    (!e.target.closest(".bubble") && !e.target.closest(".burger_menu_btn")) ||
    e.target.closest(".bubble .menu_item")
  ) {
    bmenu.classList.remove("menu_active");
  }
  if (
    (!e.target.closest(".actions_menu") && !e.target.closest(".actions_btn")) ||
    e.target.closest(".management_wrapper .menu_item")
  ) {
    actionsmenu.classList.remove("menu_active");
    mactionsmenu.classList.remove("menu_active");
  }
  if (
    !e.target.closest(".management_wrapper") &&
    !e.target.closest(".management_back_btn") &&
    !e.target.closest(".email_edit_modal")
  ) {
    if (document.querySelector(".management_active")) {
      management.classList.remove("management_active");
    }
  }
  if (
    (!e.target.closest(".chatfolders") &&
      !e.target.closest(".users_modal_btn")) ||
    e.target.closest(".chatfolders .list_item_btn")
  ) {
    if (document.querySelector(".chatfolders_active")) {
      chatfolders.classList.remove("chatfolders_active");
    }
  }
  if (!e.target.closest(".notifications .action_btn")) {
    document
      .querySelectorAll(".notifications .actions_menu")
      .forEach((element) => {
        element.classList.remove("menu_active");
      });
  }
};
window.onmouseover = (e) => {
  if (
    !e.target.closest(".management_wrapper .actions_btn") &&
    !e.target.closest(".management_wrapper .actions_menu_wrapper")
  ) {
    mactionsmenu.classList.remove("menu_active");
  }
};
