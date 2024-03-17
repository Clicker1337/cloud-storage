import {Injectable} from '@nestjs/common';
import {CreateFileDto} from './dto/create-file.dto';
import {UpdateFileDto} from './dto/update-file.dto';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {FileEntity} from './entities/file.entity';

@Injectable()
export class FilesService {
    constructor(
        @InjectRepository(FileEntity)
        private repository: Repository<FileEntity>,
    ) { }

    create(file: Express.Multer.File, userId: number) {
        return this.repository.save({
            filename: file.filename,
            originalName: file.originalname,
            size: file.size,
            mimetype: file.mimetype,
            user: {id: userId},
        });
    }

    findAll() {
        return this.repository.find();
    }
}
