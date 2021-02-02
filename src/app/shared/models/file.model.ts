export class File {
    _id?: string;
    id?: string;
    fileName?: string;
    path?: string;
    mimeType?: string;
    updatedAt?: Date;
    createdAt?: Date;
    status?: number;
    originalName?: string;
    destination?: string;
    ext?: string;
    size?: number;
    isLocal?: boolean;
  
    constructor(data?: any) {
      if (data) {
        Object.assign(this, data);
      }
    }
  
    deserialize(input: any): this {
      // Assign input to our object BEFORE deserialize our cars to prevent already deserialized cars from being overwritten.
      this.id = input.id;
      this.fileName = input.file_name;
      this.path = input.path;
      this.mimeType = input.mime_type;
      this.status = input.status;
      this.ext = input.ext;
      this.size = input.size;
      this.createdAt = input.created_at;
      this.updatedAt = input.updated_at;
      this.originalName = input.original_name;
      this.isLocal = input.is_local || true;
  
      return this;
    }
    serialize(): any {
      return {
        id: this.id,
        file_name: this.fileName,
        original_name: this.originalName,
        path: this.path,
        mime_type: this.mimeType,
        ext: this.ext,
        size: this.size,
        status: this.status,
        is_local: this.isLocal,
        created_at: this.createdAt,
        updated_at: this.updatedAt
      }
    }
  }