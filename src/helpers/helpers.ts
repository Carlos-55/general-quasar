import { URL_SERVER, ITEMS_OFFLINE } from './configs';
export function setStorage(type: string, items: any) {
  localStorage.setItem(type, JSON.stringify(items));
}
export function getStorage(type: string) {
  let items = JSON.parse(localStorage.getItem(type) as any);
  return items ? items : [];
}
export function oflineItems(url: string, type: string, content: any) {
  let items: Object[] =
    JSON.parse(localStorage.getItem(ITEMS_OFFLINE) as any) || [];
  items.push({ url: `${URL_SERVER}${url}`, type, content });
  localStorage.setItem(ITEMS_OFFLINE, JSON.stringify(items));
}
export function sorted(type: string) {
  return function(a: any, b: any) {
    if (!a[type] || !b[type]) return -1;
    if (a[type] > b[type]) {
      return -1;
    }
    if (a[type] < b[type]) {
      return 1;
    }
    // a must be equal to b
    return 0;
  };
}
export function generateFormData(item: any, file: File) {
  let form = new FormData();
  for (const key in item) {
    form.append(key, item[key]);
  }
  form.append('image', file);
  return form;
}

export async function generateFormDataAny(item: any) {
  let form = new FormData();
  for (const key in item) {
    if (typeof item[key] == 'object' && Array.isArray(item[key])) {
      for (const a of item[key]) {
        await form.append(key, a);
      }
    } else {
      await form.append(key, item[key]);
    }
  }
  return form;
}

export function getLocalization(): Promise<any> {
  return new Promise((resolve, reject) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      });
    } else {
      reject('No tienes accesos la geolocalizacion');
    }
  });
}


export function printDiv(idName: string) {
  //@ts-ignore
  const dataUrl = document.getElementById(idName).toDataURL(); 

		let windowContent = '<!DOCTYPE html>';
		windowContent += '<html>';
		windowContent += '<head><title>Print canvas</title></head>';
		windowContent += '<body>';
		windowContent += '<img src="' + dataUrl + ' " style="display: block; margin: auto; padding: 4em;">';
		windowContent += '</body>';
		windowContent += '</html>';

		const printWin = window.open('', '', 'width=' + screen.availWidth + ',height=' + screen.availHeight);
    //@ts-ignore
    printWin.document.open();
    //@ts-ignore
    printWin.document.write(windowContent); 
    //@ts-ignore
		printWin.document.addEventListener('load', function() {
    //@ts-ignore
    printWin.focus();
    //@ts-ignore
    printWin.print();
    //@ts-ignore
    printWin.document.close();
    //@ts-ignore
    printWin.close();            
		}, true);
}