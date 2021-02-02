export class Helper {
    static cleanObj(obj: any) {
        for (let propName in obj) {
            if (obj[propName] == null || obj[propName] == undefined) {
                delete obj[propName];
            }
        }
        return obj;
    }
    static objectToFormData = function (obj: Object = {}, form?: FormData, namespace?: string) {
        let fd = form || new FormData();
        let formKey: string;
        for (var property in obj) {
            if (obj.hasOwnProperty(property)) {

                if (namespace) {
                    formKey = namespace + '[' + property + ']';
                } else {
                    formKey = property;
                }

                // if the property is an object, but not a File,
                // use recursivity.
                if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {

                    this.objectToFormData(obj[property], fd, property);

                } else {
                    // if it's a string or a File object
                    fd.append(formKey, obj[property]);
                }

            }
        }

        return fd;

    };
}