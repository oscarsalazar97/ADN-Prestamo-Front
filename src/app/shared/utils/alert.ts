import Swal from "sweetalert2"

export let prue = (() => {
    Swal.fire({
        position: 'top-end',
        width: 100,
        toast: true,
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      })
});

export let error = ((message: any) => {
    Swal.fire({
        position: 'top-end',
        width: 600,
        icon: 'error',
        title: message,
        showConfirmButton: false,
        timer: 1500
      })
});